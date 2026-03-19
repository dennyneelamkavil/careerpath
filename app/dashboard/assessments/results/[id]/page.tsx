import AssessmentResult from "../components/AssessmentResult";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Params) {
  const { id } = await params;
  return <AssessmentResult id={id} />;
}
