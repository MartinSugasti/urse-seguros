import TeamCard from './TeamCard';

import jlImage from '../../../assets/images/team/jl.png';
import jimeImage from '../../../assets/images/team/jime.png';
import anabelImage from '../../../assets/images/team/anabel.png';
import andreinaImage from '../../../assets/images/team/andreina.png';
import javierImage from '../../../assets/images/team/javier.png';
import brunoImage from '../../../assets/images/team/bruno.png';
import santiagoImage from '../../../assets/images/team/santiago.png';
import matiasImage from '../../../assets/images/team/matias.png';

const Team = () => (
  <section id="team">
    <div className="container-lg py-5">
      <div className="text-center text-light">
        <h1>Nuestro Equipo</h1>
      </div>

      <div className="row mx-0 g-3 g-sm-4 g-md-5 g-xl-4 justify-content-center mt-4">
        <div className="col-6 col-sm-5 col-xl-3">
          <TeamCard
            name="Jose Luis Urse"
            position="Director"
            image={jlImage}
            email="jlurse@urseseguros.com.uy"
            linkedinUrl="https://www.linkedin.com/in/jose-luis-urse-7702b015/"
          />
        </div>

        <div className="col-6 col-sm-5 col-xl-3">
          <TeamCard
            name="Jimena Urse"
            position="Co-Directora"
            image={jimeImage}
            email="jimenaurse@urseseguros.com.uy"
            linkedinUrl="https://www.linkedin.com/in/jimena-urse-0aba3955/"
          />
        </div>

        <div className="col-6 col-sm-5 col-xl-3 me-xl-1">
          <TeamCard
            name="Anabel Buffa"
            position="Ejecutiva Siniestros"
            image={anabelImage}
            email="abuffa@urseseguros.com.uy"
          />
        </div>

        <div className="col-6 col-sm-5 col-xl-3">
          <TeamCard
            name="Andreina Navarro"
            position="Ejecutiva Comercial y Cobranzas"
            image={andreinaImage}
            email="anavarro@urseseguros.com.uy"
          />
        </div>

        <div className="col-6 col-sm-5 col-xl-3">
          <TeamCard
            name="Javier Osvalde"
            position="Ejecutivo Comercial y Cobranzas"
            image={javierImage}
            email="josvalde@urseseguros.com.uy"
          />
        </div>

        <div className="col-6 col-sm-5 col-xl-3 me-xl-1">
          <TeamCard
            name="Maicol Bruno"
            position="Ejecutivo Comercial"
            image={brunoImage}
            email="mbruno@urseseguros.com.uy"
            linkedinUrl="https://www.linkedin.com/in/maicol-bruno-martinez-0a23212aa"
          />
        </div>

        <div className="col-6 col-sm-5 col-xl-3">
          <TeamCard
            name="Santiago Ippes"
            position="Ejecutivo Comercial"
            image={santiagoImage}
            email="sippes@urseseguros.com.uy"
          />
        </div>

        <div className="col-6 col-sm-5 col-xl-3">
          <TeamCard
            name="Matias Luengo"
            position="Ejecutivo Comercial"
            image={matiasImage}
            email="mluengo@urseseguros.com.uy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Team;
