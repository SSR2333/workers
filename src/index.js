import yamlContent from "../.github/workflows.upbpb.yml";  // 如果支援 ES Modules
// 或使用 fetch() 讀取（需先上傳到某處）

export default {
  async fetch(request) {
    // 讀取 YAML 內容
    const yamlText = await fetch("https://your-repo-url/.github/workflows.upbpb.yml");
    const yamlData = await yamlText.text();
    
    return new Response(`YAML 內容: ${yamlData}`);
  }
};
