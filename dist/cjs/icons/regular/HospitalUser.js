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
var HospitalUser_exports = {};
__export(HospitalUser_exports, {
  default: () => HospitalUser_default
});
module.exports = __toCommonJS(HospitalUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HospitalUserRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 320C533.02 320 576 277.02 576 224S533.02 128 480 128S384 170.98 384 224S426.98 320 480 320ZM480 176C506.467 176 528 197.533 528 224S506.467 272 480 272S432 250.467 432 224S453.533 176 480 176ZM512 352H448C377.309 352 320 409.307 320 480C320 497.674 334.326 512 352 512H608C625.674 512 640 497.674 640 480C640 409.307 582.693 352 512 352ZM369.607 464C377.041 427.529 409.367 400 448 400H512C550.633 400 582.959 427.529 590.393 464H369.607ZM336 64V104C336 117.254 346.746 128 360 128S384 117.254 384 104V64C384 28.652 355.346 0 320 0H64C28.654 0 0 28.652 0 64V488C0 501.254 10.746 512 24 512S48 501.254 48 488V64C48 55.162 55.164 48 64 48H320C328.836 48 336 55.162 336 64ZM148 384H108C101.375 384 96 389.375 96 396V436C96 442.625 101.375 448 108 448H148C154.625 448 160 442.625 160 436V396C160 389.375 154.625 384 148 384ZM276 288H236C229.375 288 224 293.375 224 300V340C224 346.625 229.375 352 236 352H276C282.625 352 288 346.625 288 340V300C288 293.375 282.625 288 276 288ZM276 384H236C229.375 384 224 389.375 224 396V436C224 442.625 229.375 448 236 448H276C282.625 448 288 442.625 288 436V396C288 389.375 282.625 384 276 384ZM148 288H108C101.375 288 96 293.375 96 300V340C96 346.625 101.375 352 108 352H148C154.625 352 160 346.625 160 340V300C160 293.375 154.625 288 148 288ZM256 177.281V142.719C256 138.125 252.273 134.398 247.68 134.398H217.602V104.32C217.602 99.727 213.875 96 209.281 96H174.719C170.125 96 166.398 99.727 166.398 104.32V134.398H136.32C131.727 134.398 128 138.125 128 142.719V177.281C128 181.875 131.727 185.602 136.32 185.602H166.398V215.68C166.398 220.273 170.125 224 174.719 224H209.281C213.875 224 217.602 220.273 217.602 215.68V185.602H247.68C252.273 185.602 256 181.875 256 177.281Z" })
  }
));
HospitalUserRegular.displayName = "HospitalUserRegular";
var HospitalUser_default = HospitalUserRegular;
