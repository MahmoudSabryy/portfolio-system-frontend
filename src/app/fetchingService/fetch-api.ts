import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchApi {
  dashboardDataHome: any;

  dashboardDataAbout: any;

  dashboardDataEducation: any;

  dashboardDataProject: any;

  data: any;

  DashboardData: any;

  ProjectData: any;

  async fetchDashboardData(
    url: string[],
    method: string
  ): Promise<{
    dashboardDataHome: any;
    dashboardDataAbout: any;
    dashboardDataEducation: any;
    dashboardDataProject: any;
  }> {
    try {
      const response1 = await fetch(url[0], {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response2 = await fetch(url[1], {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response3 = await fetch(url[2], {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response4 = await fetch(url[3], {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response1.ok) throw new Error(`Home request failed with status: ${response1.status}`);
      if (!response2.ok) throw new Error(`About request failed with status: ${response2.status}`);
      if (!response3.ok) throw new Error(`About request failed with status: ${response3.status}`);
      if (!response4.ok) throw new Error(`About request failed with status: ${response4.status}`);

      this.dashboardDataHome = await response1.json();
      this.dashboardDataAbout = await response2.json();
      this.dashboardDataEducation = await response3.json();
      this.dashboardDataProject = await response4.json();

      return {
        dashboardDataHome: this.dashboardDataHome,
        dashboardDataAbout: this.dashboardDataAbout,
        dashboardDataEducation: this.dashboardDataEducation,
        dashboardDataProject: this.dashboardDataProject,
      };
      // console.log('Fetched Data:', this.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async fetchData(url: string, method: string): Promise<any> {
    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      this.data = await response.json();
      return this.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async updateData(url: string, method: string, body?: any): Promise<any> {
    try {
      const options: any = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Updated Data:', data);

      return data;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error; // مهم جدًا
    }
  }

  async addData(uri: string, method: string, body: any) {
    try {
      const response = await fetch(uri, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      this.ProjectData = await response.json();
      console.log('Fetched DashboardData:', this.ProjectData);
      return this.ProjectData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async deleteProject(id: string): Promise<any> {
    try {
      const response = await fetch(`http://localhost:3000/project/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      this.ProjectData.projectSection = this.ProjectData.projectSection.filter(
        (p: any) => p.id !== id
      );
      return response;
    } catch (err) {
      console.error('Delete error: ', err);
    }
  }

  async addFormData(uri: string, method: string, body: FormData) {
    try {
      const response = await fetch(uri, {
        method: method,
        body: body,
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      return await response.json();
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  }

  async deleteSkill(id: number): Promise<any> {
    try {
      const response = await fetch(`http://localhost:3000/skills/delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      return await response.json();
    } catch (error) {
      console.error('Delete error: ', error);
    }
  }

  async deleteExp(id: string): Promise<any> {
    try {
      const response = await fetch(`http://localhost:3000/exp/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      // this.ProjectData.projectSection = this.ProjectData.projectSection.filter(
      //   (p: any) => p.id !== id
      // );
      return response;
    } catch (err) {
      console.error('Delete error: ', err);
    }
  }
}
