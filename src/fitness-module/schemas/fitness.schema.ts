import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type FitnessDocument = Fitness & mongoose.Document;

@Schema({ timestamps: true })
export class Fitness {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  description: string;
}

export const FitnessSchema = SchemaFactory.createForClass(Fitness);
