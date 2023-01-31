FROM mcr.microsoft.com/dotnet/runtime:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Hochverdiener-3.0/Hochverdiener-3.0.csproj", "Hochverdiener-3.0/"]
RUN dotnet restore "Hochverdiener-3.0/Hochverdiener-3.0.csproj"
COPY . .
WORKDIR "/src/Hochverdiener-3.0"
RUN dotnet build "Hochverdiener-3.0.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Hochverdiener-3.0.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Hochverdiener-3.0.dll"]
