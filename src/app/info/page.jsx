import imagen from "@/images/ips.jpg";
export const metadata = {
  title: "Información - NextJs",
};

const InfoPage = () => {
  //console.log(imagen.src);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-12 items-center'>
      <div className='px-5'>
        <h2 className='text-2xl uppercase my-4 font-black'>Información</h2>
        <p className='text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          fuga culpa alias iusto. Vitae commodi voluptate voluptas, ex ducimus
          aliquid ipsam! Officiis, eaque quis pariatur voluptatum facere rerum
          eveniet inventore. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ipsa eligendi molestias aut atque provident recusandae vero
          delectus veniam quo ea numquam quos esse, nulla, porro quidem labore
          consequuntur dolores quod.
        </p>
      </div>
      <img
        src={imagen.src}
        alt='imagen-post'
        className='mx-auto rounded-xl mt-4 md:mt-0'
      />
    </div>
  );
};

export default InfoPage;
