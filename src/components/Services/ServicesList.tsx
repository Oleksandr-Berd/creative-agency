import * as SC from "./ServicesStyle";

import { servicesDb } from "../../db/servicesDb";

const ServicesList: React.FC = () => {
  return (
    <SC.ServiceListCon>
      <SC.ListTitle>Our approach for creating a winning brand</SC.ListTitle>
      <SC.ServicesList>
        {servicesDb.map(({ id, title, body }) => {
          const count = id < 10 ? "0" + id : id;

          return (
            <SC.Item key={id}>
              <SC.Count>{count}</SC.Count>
              <SC.ItemTitle>{title}</SC.ItemTitle>
              <SC.ItemBody>{body}</SC.ItemBody>
            </SC.Item>
          );
        })}
      </SC.ServicesList>
    </SC.ServiceListCon>
  );
};

export default ServicesList;
