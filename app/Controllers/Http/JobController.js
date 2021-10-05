'use strict'

const Job = use('App/Models/Job');

class JobController {
    async getJobs({request, response, auth}) {
        
        if(await auth.check()) {
            let jobs = await Job.query().with('user').fetch()
            return response.json(jobs)

        } else {
            return response.json({message: 'You are not registered!'})
        }
    }

    async createJob({request, response, auth}) {

        try {
             if (await auth.check()) {
                let job = await auth.user.jobs().create(request.all());
                await job.load('user');
                return response.json(job)
            }      
          } catch (e) {
            return response.json({message: 'You are not authorized to perform this action'})
          }
    }

    async updateJob({request, response, auth}) {
        try {
            if (await auth.check()) {
               let job = await Job.find(request.params.id)

               job.title = request.input('title');
               job.link = request.input('link');
               job.description = request.input('description');

               await job.save()
               await job.load('user');
               return response.json(job)
           }      
         } catch (e) {
           return response.json({message: 'You are not authorized to perform this action'})
         }
    }

    async deleteJob({request, response, auth}) {
        try {
            if (await auth.check()) {
            let job = await Job.find(request.params.id)
            await job.delete();
            return response.json(job)
           }      
         } catch (e) {
           return response.json({message: 'You are not authorized to perform this action'})
         }
    }
}

module.exports = JobController
