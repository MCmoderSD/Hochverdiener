FROM mcr.microsoft.com/dotnet/runtime:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Hochverdiener/Hochverdiener.csproj", "Hochverdiener/"]
RUN dotnet restore "Hochverdiener/Hochverdiener.csproj"
COPY . .
WORKDIR "/src/Hochverdiener"
RUN dotnet build "Hochverdiener.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Hochverdiener.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Hochverdiener.dll"]
