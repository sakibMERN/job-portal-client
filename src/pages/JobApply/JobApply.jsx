import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const JobApply = () => {
    const {user} = useAuth();
    
    const {id} = useParams();
    // console.log(id, user);


    const submitJobApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.portfolio.value;

        // console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }
        console.log(jobApplication);
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Apply now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={submitJobApplication} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input
                type="url"
                placeholder="LinkedIn URL"
                name="linkedIn"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub URL</span>
              </label>
              <input
                type="url"
                placeholder="GitHub URL"
                name="github"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Portfolio URL</span>
              </label>
              <input
                type="url"
                placeholder="Portfolio URL"
                name="portfolio"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
