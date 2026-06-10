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
var CloudShowers_exports = {};
__export(CloudShowers_exports, {
  default: () => CloudShowers_default
});
module.exports = __toCommonJS(CloudShowers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudShowersRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M410.75 104.25C397.25 61.75 358 32 312 32C298.5 32 285.25 34.625 272.75 39.75C250.25 14.5 218.375 0 184 0C120 0 67.625 50.25 64.25 113.375C25.625 130.375 0 168.5 0 212C0 271.5 48.375 320 108 320H404C463.625 320 512 271.5 512 212C512 154.75 467.125 107.75 410.75 104.25ZM404 272H108C74.875 272 48 245.125 48 212C48 184 67.125 160 94.375 153.75L115.25 148.875L112.375 124C112.25 122.75 112 121.375 112 120C112 80.25 144.25 48 184 48C209.25 48 232.25 61.125 245.375 83.125L258.75 105.25L279.75 90.25C289.375 83.625 300.5 80 312 80C340.625 80 364.375 101.75 367.25 130.375L369.5 152H404C437.125 152 464 178.875 464 212S437.125 272 404 272ZM200 384C186.75 384 176 394.75 176 408V488C176 501.25 186.75 512 200 512S224 501.25 224 488V408C224 394.75 213.25 384 200 384ZM104 352C90.75 352 80 362.75 80 376V456C80 469.25 90.75 480 104 480S128 469.25 128 456V376C128 362.75 117.25 352 104 352ZM296 352C282.75 352 272 362.75 272 376V456C272 469.25 282.75 480 296 480S320 469.25 320 456V376C320 362.75 309.25 352 296 352ZM392 384C378.75 384 368 394.75 368 408V488C368 501.25 378.75 512 392 512S416 501.25 416 488V408C416 394.75 405.25 384 392 384Z" })
  }
));
CloudShowersRegular.displayName = "CloudShowersRegular";
var CloudShowers_default = CloudShowersRegular;
