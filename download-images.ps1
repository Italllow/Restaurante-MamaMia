$images = @(
    @{url = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'; out = 'images/hero.jpg'},
    @{url = 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60'; out = 'images/salad.jpg'},
    @{url = 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=60'; out = 'images/risotto.jpg'},
    @{url = 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=60'; out = 'images/steak.jpg'}
)

foreach ($i in $images) {
    $url = $i.url
    $out = $i.out
    Write-Host "Baixando $url -> $out"
    try {
        Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -ErrorAction Stop
        Write-Host "Salvo: $out"
    } catch {
        Write-Host "Falha ao baixar $url : $_" -ForegroundColor Red
    }
}
Write-Host "Concluído."