import { RequestHandler } from "express";
import multer from "multer";

export const UploadSingle = (directory: string, fieldName: string): RequestHandler => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `public/${directory}`);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, `${uniqueSuffix}-${file.originalname}`);
        },
    });

    const upload = multer({ storage: storage });
    return upload.single(fieldName);
};

export const UploadMultiple = (directory: string, fieldName: string, maxCountFile: number): RequestHandler => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `public/${directory}`);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, `${uniqueSuffix}-${file.originalname}`);
        },
    });

    const upload = multer({ storage: storage });
    return upload.array(fieldName, maxCountFile);
};

export const UploadSingleToMemory = (fieldName: string): RequestHandler => {
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });
    return upload.single(fieldName);
};

export const UploadMultipleToMemory = (fieldName: string, maxCountFile: number): RequestHandler => {
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });
    return upload.array(fieldName, maxCountFile);
};
