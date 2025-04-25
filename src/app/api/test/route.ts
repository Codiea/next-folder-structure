export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const { url } = request;

  console.log(url);
}
