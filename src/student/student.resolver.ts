import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // @Query(() => StudentType)
  // lesson(@Args('id') id: string) {
  //   return this.studentService.getLesson(id);
  // }

  // @Query(() => [StudentType])
  // lessons() {
  //   return this.studentService.getLessons();
  // }

  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
