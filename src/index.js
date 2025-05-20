export default {
  async fetch(request) {
    // 從 GitHub 直接讀取 YAML 文件（需公開或使用 Token）
    const yamlUrl = "https://raw.githubusercontent.com/你的用戶名/你的倉庫/main/.github/workflows.upbpb.yml";
    const response = await fetch(yamlUrl);
    const yamlText = await response.text();

    return new Response(yamlText, {
      headers: { "Content-Type": "text/plain" }
    });
  }
};