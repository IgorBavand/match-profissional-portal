import { Component } from '@angular/core';
import {Job} from "../../dto/job.dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  jobs: Job[] = [
    {
      id: "43968cda-dd1b-4515-94b4-9eb9b2bae692",
      title: "Full Stack Developer",
      description: "We are looking for a skilled full-stack developer.",
      requirements: ["JavaScript", "Node.js", "React", "TypeScript"],
      contractType: "full-time",
      salary: "60000.00",
      seniority: "senior",
      isActive: true,
      createdAt: "2025-01-29T00:20:59.783Z",
      updatedAt: "2025-01-29T00:20:59.783Z",
      company: {
        id: "40da76a9-487e-486f-95e1-a9c4e9eec696",
        name: "Tech Solutions Ltda",
        cnpj: "12.345.678/0001-80",
        email: "contato2@techsolutions.com",
        password: "$2b$10$0F3qVQ2BBVl/RGlqxBy30uIiP.XW4BldyOYtcaMijZMdkWzxDT.AG",
        businessArea: "Tecnologia da Informação",
        createdAt: "2025-01-26T23:19:40.165Z",
        updatedAt: "2025-01-26T23:19:40.165Z"
      },
      applications: []
    }
    // Adicione mais jobs conforme necessário
  ];

}
