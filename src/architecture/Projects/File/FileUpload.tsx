import React, { useState, useEffect } from "react";
import Logo from "../../../assets/svg/upload.svg";
import LogoDark from "../../../assets/svg/upload_dark.svg";

type FileData = {
  name: string;
  size: number;
  progress: number;
};

interface FileUploadProps {
  allowedFormats: string[];
  maxSizeMB: number;
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  allowedFormats,
  maxSizeMB,
  onFileUpload,
}) => {
  const [file, setFile] = useState<FileData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const fileSizeMB = selectedFile.size / (1024 * 1024);
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();

      if (!fileExtension || !allowedFormats.includes(fileExtension)) {
        setError(`Only ${allowedFormats.join(", ")} files are allowed.`);
        setFile(null);
        return;
      }

      if (fileSizeMB > maxSizeMB) {
        setError(`File size exceeds the maximum limit of ${maxSizeMB} MB.`);
        setFile(null);
        return;
      }

      setFile({
        name: selectedFile.name,
        size: selectedFile.size,
        progress: 0,
      });
      setError(null);
      setUploading(true);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (uploading && file) {
      interval = setInterval(() => {
        setFile((prevFile) => {
          if (prevFile && prevFile.progress < 100) {
            return {
              ...prevFile,
              progress: prevFile.progress + 10,
            };
          }
          return prevFile!;
        });
      }, 500);

      if (file?.progress >= 100) {
        setUploading(false);

        const fileToUpload = new File([new Blob([file.name])], file.name, {
          type: "application/octet-stream",
        });

        onFileUpload(fileToUpload);
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [uploading, file, onFileUpload]);

  return (
    <div className="flex flex-col items-center p-4 border border-stroke bg-white  dark:border-slate-600 dark:bg-boxdark rounded-lg mb-4">
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center cursor-pointer text-gray-500"
      >
        <div className="mb-2 text-2xl text-primary">
          <img src={Logo} alt="Upload Icon" className="w-8 h-8 dark:hidden" />
          <img
            src={LogoDark}
            alt="Upload Icon"
            className="w-8 h-8 hidden dark:block"
          />
        </div>
        <span>Haga clic para cargar</span>
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="flex gap-2 mt-2">
        {allowedFormats.map((format) => (
          <span
            key={format}
            className="px-2 bg-[#ebf2fd] text-primary py-1 text-sm border font-semibold rounded-lg"
          >
            {format.toUpperCase()}
          </span>
        ))}
      </div>

      {file && (
        <div className="w-full mt-4">
          <div className="flex justify-between mb-1 text-sm">
            <span>{file.name}</span>
            <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
          </div>
          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
              style={{ width: `${file.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
    </div>
  );
};

export default FileUpload;
