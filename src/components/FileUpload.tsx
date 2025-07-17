import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  currentImage?: string;
  onRemove?: () => void;
}

const FileUpload = ({ onFileSelect, currentImage, onRemove }: FileUploadProps) => {
  const [preview, setPreview] = useState<string | null>(currentImage || null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: false
  });

  const handleRemove = () => {
    setPreview(null);
    onRemove?.();
  };

  if (preview) {
    return (
      <div className="relative group">
        <img
          src={preview}
          alt="Preview"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-200 rounded-lg flex items-center justify-center">
          <Button
            variant="destructive"
            size="sm"
            onClick={handleRemove}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            title="Remove image"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200 ${
        isDragActive
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-300 hover:border-gray-400'
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-2">
        {isDragActive ? (
          <Upload className="h-12 w-12 text-blue-500" />
        ) : (
          <Image className="h-12 w-12 text-gray-400" />
        )}
        <div>
          <p className="text-lg font-medium text-gray-900">
            {isDragActive ? 'Drop the image here' : 'Upload an image'}
          </p>
          <p className="text-sm text-gray-500">
            Drag & drop or click to select (JPEG, PNG, GIF, WebP)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;