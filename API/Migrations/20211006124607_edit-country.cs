using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class editcountry : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Counter",
                table: "Users",
                newName: "Country");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Country",
                table: "Users",
                newName: "Counter");
        }
    }
}
