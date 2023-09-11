export default function ProjectDetail_Page({params}){
    console.log(params);

    const {id:clientId, projectId} = params;

    return (
        <h1>
            Porject{projectId} of {clientId}
        </h1>
    );
}