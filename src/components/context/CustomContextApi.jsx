import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const BlogsContext = createContext();

function CustomContextApi({ children }) {
  const [homedata, setHomeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://strapi-blog.homznoffiz.com/api/home-page-blogs?pagination[page]=1&pagination[pageSize]=100&populate=blog_info.image&populate=blog_info.video&populate=blog_tags&populate=authors.author_image"
        );
        setHomeData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const headlinesData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "headlines"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];

  // console.log(headlinesData);

  const MainnewsData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "main-news"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];

  // console.log(MainnewsData);

  const EditorsData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "editor's pick"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("editors data");
  // console.log(EditorsData);

  const FeaturedNewsData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "featured_news"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("FeaturedNewsData");
  // console.log(FeaturedNewsData);

  const HotTopicsData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "hot-topics"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("HotTopicsData");
  // console.log(HotTopicsData);

  const TrendingNewsData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "trending_news"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("TrendingNewsData");
  // console.log(TrendingNewsData);

  const RealEstateNewsData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "real-esate-news"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("RealEstateNewsData");
  // console.log(RealEstateNewsData);

  const LandRecordsData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "land_records"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("LandRecordsData");
  // console.log(LandRecordsData);

  const FinancialMeasurementsData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) =>
                  tag.attributes.tag_with_homepage === "financial-measurements"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("FinancialMeasurementsData");
  // console.log(FinancialMeasurementsData);

  const AstroVastuData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "astrology-vastu"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("AstroVastuData");
  // console.log(AstroVastuData);

  const StockData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "stock"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("StockData");
  // console.log(StockData);

  const CelebrityHomesData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "celebrity-homes"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("CelebrityHomesData");
  // console.log(CelebrityHomesData);

  const InteriorDecorData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) => tag.attributes.tag_with_homepage === "interior-decor"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("InteriorDecorData");
  // console.log(InteriorDecorData);

  const GovtIdentityData =
    homedata && homedata.data
      ? homedata.data
          .filter((item) => {
            const { blog_tags, blog_info } = item.attributes;
            return (
              blog_tags.data.some(
                (tag) =>
                  tag.attributes.tag_with_homepage === "govt-identifications"
              ) &&
              blog_info &&
              new Date(blog_info.published_date) <= new Date()
            );
          })
          .sort((a, b) => {
            const dateA = new Date(a.attributes.blog_info.published_date);
            const dateB = new Date(b.attributes.blog_info.published_date);
            return dateB - dateA;
          })
      : [];
  // console.log("GovtIdentityData");
  // console.log(GovtIdentityData);

  const [user, setUser] = useState("Jesse Hall");

  return (
    <BlogsContext.Provider
      value={{
        // user: user,
        homedata: homedata,
        headlinesData: headlinesData,
        MainnewsData: MainnewsData,
        EditorsData: EditorsData,
        FeaturedNewsData: FeaturedNewsData,
        HotTopicsData: HotTopicsData,
        TrendingNewsData: TrendingNewsData,
        RealEstateNewsData: RealEstateNewsData,
        LandRecordsData: LandRecordsData,
        FinancialMeasurementsData: FinancialMeasurementsData,
        AstroVastuData: AstroVastuData,
        StockData: StockData,
        CelebrityHomesData: CelebrityHomesData,
        InteriorDecorData: InteriorDecorData,
        GovtIdentityData: GovtIdentityData,
      }}
      // value={{ user: user }}
    >
      {children}
    </BlogsContext.Provider>
  );
}

export default CustomContextApi;
