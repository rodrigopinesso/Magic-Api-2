import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "../enums/role.enum";

@Schema({
    timestamps: true,
})

export class User {

    @Prop({ required: true })
    name: string;

    @Prop({ unique: true, required: true, message: 'Este email já existe' })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({
      type: [{ type: String, enum: Role }],
      default: [Role.User]  
    })
    role:  Role[]

}

export const UserSchema = SchemaFactory.createForClass(User);