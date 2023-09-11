export default function ProjectDetailPage({params}){
    console.log(params);

    const {id:clientId, projectId} = params;

    return (
        <h1>
            Porject{projectId} of {clientId}
        </h1>
    );
}