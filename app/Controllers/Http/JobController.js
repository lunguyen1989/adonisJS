'use strict'

const Job = use('App/Models/Job');

class JobController {
    async home({view}) {
        // Fetch a job
        const jobs = await Job.all();

        return view.render('index', { jobs: jobs.toJSON() })
    }

    async userIndex({view, auth}) {

        // Fetch all user's jobs
        const jobs = await auth.user.jobs().fetch();

        return view.render('index', { jobs: jobs.toJSON() })
    }

    async create({ request, response, session, auth}) {
        const job = request.all();

        const posted = await auth.user.jobs().create({
            title: job.title,
            link: job.link,
            description: job.description
        });

        session.flash({message:"Your job has been posted!"});
        return response.redirect('back');
    }
}

module.exports = JobController
