import logo from './logo.svg';
import { useForm } from "react-hook-form";
import Select from "react-select";
import './App.css';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <header>
        <img src={logo} className="logo" alt="" />
      </header>
      <div className="container">
       <div className="section-left">
        <h1 className="title">SavvyMX</h1>
        <div className="para">
          <p>Our flagship service has helped thousands of aircraft owners save millions of dollars and untold amounts of hassle on their aircraft maintenance. For a modest annual fee, SavvyMx provides the concierge service of a dedicated, highly experienced A&P/IA who knows your airplane inside-out.</p>
        </div>
        <div className="services">
          <h5> The service includes:</h5>
          <ul>
            <li>Helping you select the best service centers and maintenance technicians</li>
            <li>Obtaining written estimates</li>
            <li>Advising you which tasks are important, and which ones are not worth doing </li>
            <li>Giving specific written direction to the service centers and technicians</li>
            <li>Reviewing your maintenance invoices</li>
            <li>Reviewing the maintenance logbook entries</li>
            <li>Analyzing your engine monitor data</li>
            <li>Providing 24/7 breakdown assistance</li>
          </ul>
        </div>
        <div className="price_section">
          <p>The SavvyMX service's price starts from:</p>
          <span>$750/year</span>
        </div>
        </div>
        <div className="section-right">
        <h1 className="title">SavvyMX</h1>
        <div className="price_section price_section2">
          <p>The SavvyMX service's price starts from:</p>
          <span>$750/year</span>
        </div>
        <h5>Personal Info</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" type="email" {...register("email", { required: true  })} />
        <input placeholder="Password" type="password" {...register("password", { required: true  })} />
        <p className="p">From 8 to 30 Characters</p>
        <input placeholder="First Name" type="text" {...register("firstName", { required: true  })} />
        <input placeholder="Last Name" type="text" {...register("lastName", { required: true  })} />

        <h5>Service Info</h5>
        <input placeholder="Registration Number*" type="number" {...register("regNumber", { required: true  })} />

          <Select
          className="field"
          placeholder="Aircraft Manufacture*"
          options={[
            {value: "1" , label:"option 1"},
            {value: "2" , label: "option 2"}
          ]}
          />

          <Select
          className="field"
          placeholder="Aircraft Model*"
          options={[
            {value: "1" , label:"option 1"},
            {value: "2" , label: "option 2"}
          ]}
          />

        <p className="req-field">*Require Fields</p>
        <input class="submit" type="submit" />
      </form>
    </div>
  </div>
</>
  );
}

export default App;
