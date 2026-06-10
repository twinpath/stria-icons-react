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
var FireSmoke_exports = {};
__export(FireSmoke_exports, {
  default: () => FireSmoke_default
});
module.exports = __toCommonJS(FireSmoke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireSmokeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 288C490.875 288 458.25 306.25 437.875 334.125C418.375 288.25 373 256 320 256S221.625 288.25 202.125 334.125C181.75 306.25 149.125 288 112 288C50.125 288 0 338.125 0 400S50.125 512 112 512H528C589.875 512 640 461.875 640 400S589.875 288 528 288ZM195.75 283.25C205.375 271.25 217 260.875 229.625 252.25C224.875 240.625 222.25 227.5 222.25 212.875C222.25 183.125 240.375 156.75 276.625 111.75C281.75 118.001 350.375 208.75 350.375 208.75L394.25 157C397.25 162.25 400.125 167.5 402.625 172.375C415 196.875 416.5 225.5 407.75 250.25C421.375 259.25 433.75 270.25 444.25 283C457.75 273.25 472.75 266.25 488.75 261.75C493.25 246.25 495.875 229.75 495.875 212.75C495.875 172.5 455.125 89.375 398.125 38.625C381.75 53.25 367 68.5 353.875 84C332.625 55.75 306.125 26.875 276 0C198.75 68.875 144 158.75 144 213C144 230.001 146.625 246.375 151.25 261.875C167.125 266.5 182.25 273.5 195.75 283.25Z" })
  }
));
FireSmokeSolid.displayName = "FireSmokeSolid";
var FireSmoke_default = FireSmokeSolid;
