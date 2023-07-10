import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';
import { OrderModule } from './order/order.module';
import { StatisticModule } from './statistic/statistic.module';
import { PaginationModule } from './pagination/pagination.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [AuthModule, ConfigModule.forRoot(), UserModule, ProductModule, CategoryModule, ReviewModule, OrderModule, StatisticModule, PaginationModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
