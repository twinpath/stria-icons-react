var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var HouseBuilding_exports = {};
__export(HouseBuilding_exports, {
  default: () => HouseBuilding_default
});
module.exports = __toCommonJS(HouseBuilding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseBuildingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.477 105.078C208.82 99.025 200.408 96 191.996 96S175.172 99.025 168.514 105.078L17.141 242.689C6.225 252.613 0 266.684 0 281.438V464C0 490.51 21.49 512 48 512H335.992C362.502 512 383.992 490.693 383.992 464.184C383.996 423.518 384 365.59 384 320.627V281.107C384 266.455 377.818 252.656 366.977 242.801L215.477 105.078ZM335.992 464H48V281.438C48 280.209 48.521 279.031 49.43 278.207L191.996 148.602L334.689 278.318C335.559 279.109 336 280.047 336 281.107L335.992 464ZM452 288H416V352H452C458.625 352 464 346.625 464 340V300C464 293.375 458.625 288 452 288ZM452 192H412C405.375 192 400 197.375 400 204V244C400 250.625 405.375 256 412 256H452C458.625 256 464 250.625 464 244V204C464 197.375 458.625 192 452 192ZM224 288H160C151.125 288 144 295.125 144 304V368C144 376.875 151.125 384 160 384H224C232.875 384 240 376.875 240 368V304C240 295.125 232.875 288 224 288ZM548 192H508C501.375 192 496 197.375 496 204V244C496 250.625 501.375 256 508 256H548C554.625 256 560 250.625 560 244V204C560 197.375 554.625 192 548 192ZM576 0H384C348.654 0 320 28.652 320 64V136C320 149.254 330.746 160 344 160S368 149.254 368 136V64C368 55.162 375.164 48 384 48H576C584.836 48 592 55.162 592 64V488C592 501.254 602.746 512 616 512S640 501.254 640 488V64C640 28.652 611.346 0 576 0ZM452 96H412C405.375 96 400 101.375 400 108V148C400 154.625 405.375 160 412 160H452C458.625 160 464 154.625 464 148V108C464 101.375 458.625 96 452 96ZM548 96H508C501.375 96 496 101.375 496 108V148C496 154.625 501.375 160 508 160H548C554.625 160 560 154.625 560 148V108C560 101.375 554.625 96 548 96ZM548 288H508C501.375 288 496 293.375 496 300V340C496 346.625 501.375 352 508 352H548C554.625 352 560 346.625 560 340V300C560 293.375 554.625 288 548 288Z" })
  }
));
HouseBuildingRegular.displayName = "HouseBuildingRegular";
var HouseBuilding_default = HouseBuildingRegular;
