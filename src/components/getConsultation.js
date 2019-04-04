import gql from "graphql-tag";

// export const getConsultations = gql`{

//     consultation
//     {
//         patient_name
//         consultation_date
//         doctor_name
//         medicine
//     }
// }`;

// export const getConsultationsMutation = gql`{
//     query getConsultationByPatientName(
//         $where: consultation_bool_exp = {patient_name:{_eq:"micmic"}}
//     ) {
//       consultation(where:$where) {
//         id
//         doctor_name
//         patient_name
//       }
//     }
// `;