import PetGrooming from './PetGrooming';
import PetTaxi from './PetTaxi';
import PetTraining from './PetTraining';
import DogWalking from './DogWalking';
import PetSitting from './PetSitting';
import MedicalNeed from './MedicalNeed';

export default function ServiceList() {
  return (
    <div className="ServiceList">
      <nav>
        <ul className="List">
          <li>
            <PetSitting />
          </li>
          <li>
            <DogWalking />
          </li>
          <li>
            <PetTraining />
          </li>
          <li>
            <PetTaxi />
          </li>
          <li>
            <MedicalNeed />
          </li>
          <li>
            <PetGrooming />
          </li>
        </ul>
      </nav>
    </div>
  );
}
