import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { formatSize } from "~/utils/format";

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
  maxFileSize?: number;
}

export const FileUploader = ({
  onFileSelect,
  maxFileSize = 20 * 1024 * 1024,
}: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;
      onFileSelect?.(file);
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    maxSize: maxFileSize,
  });

  const file = acceptedFiles[0] || null;

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        <div className="space-y-4 cursor-pointer">
          {file ? (
            <div
              className="uploader-selected-file"
              onClick={(e) => e.stopPropagation()}
            >
              <img src="/images/pdf.png" alt="PDF" className="size-10" />
              <div className="flex items-center space-x-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
                    <span className="font-semibold">{file.name}</span> selected
                  </p>
                  <p className="text-sm text-gray-500">
                    Size: {formatSize(file.size)}
                  </p>
                </div>
              </div>

              <button
                className="p-2 cursor-pointer"
                onClick={(e) => onFileSelect?.(null)}
              >
                <img src="/icons/cross.svg" alt="Remove" className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              <div className="mx-auto size-16 flex items-center justify-center mb-2">
                <img src="/icons/info.svg" alt="Upload" className="size-20" />
              </div>
              <p className="text-lg text-gray-500">
                <span className="font-semibold">Click to Upload</span> or drag
                and drop
              </p>
              <p className="text-lg text-gray-500">
                PDF (max {formatSize(maxFileSize)})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
