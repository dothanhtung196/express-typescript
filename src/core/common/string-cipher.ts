import bcrypt from "bcrypt";

export class StringCipher {
    constructor() {
    }

    async hashPassword(password: string): Promise<string> {
        let round = process.env.ROUND;
        const salt = await bcrypt.genSaltSync(Number(round));

        let result = await bcrypt.hashSync(password, salt);
        if (result) return result;
        else return "";
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        var result = await bcrypt.compareSync(password, hash);

        if (result) return result;
        else return false;
    }
}