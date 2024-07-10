import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurpModule } from './curp/curp.module';
import { MunicipioModule } from './municipio/municipio.module';
import { SexoModule } from './sexo/sexo.module';
import { NacionalidaModule } from './nacionalida/nacionalida.module';
import { EstadoModule } from './estado/estado.module';
import { CurpFiliaciónModule } from './curp_filiación/curp_filiación.module';
import { DiaModule } from './dia/dia.module';
import { MesModule } from './mes/mes.module';
import { CurpEntity } from './curp/Entity/curp.entity';
import { FiliacionEntity } from './curp_filiación/Entity/filiación.entity';
import { DayEntity } from './dia/Entity/dia.entity';
import { EstadoEntity } from './estado/Entity/estado.entity';
import { MesEntity } from './mes/Entity/mes.entity';
import { MunicipioEntity } from './municipio/Entity/municipio.entity';
import { NacioEntity } from './nacionalida/Entity/nacionalidad.entity';
import { SexoEntity } from './sexo/entity/sexo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1235',
      database: 'catalago',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [
        CurpEntity,
        FiliacionEntity,
        DayEntity,
        MesEntity,
        EstadoEntity,
        MunicipioEntity,
        NacioEntity,
        SexoEntity,
      ],
      synchronize: true,

      logging: true,
    }),
    CurpModule,
    MunicipioModule,
    SexoModule,
    NacionalidaModule,
    EstadoModule,
    CurpFiliaciónModule,
    DiaModule,
    MesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
