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
var CircleUser_exports = {};
__export(CircleUser_exports, {
  default: () => CircleUser_default
});
module.exports = __toCommonJS(CircleUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUserThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C202.65 480 153.65 461.188 115.135 429.936C117.666 377.768 160.559 336 213.344 336H298.656C351.441 336 394.334 377.768 396.865 429.936C358.35 461.188 309.35 480 256 480ZM411.541 416.844C402.902 362.107 355.799 320 298.656 320H213.344C156.201 320 109.098 362.107 100.459 416.844C58.33 376.092 32 319.104 32 256C32 132.486 132.486 32 256 32S480 132.486 480 256C480 319.104 453.67 376.092 411.541 416.844ZM256 128C211.82 128 176 163.818 176 208S211.82 288 256 288C300.184 288 336 252.182 336 208S300.184 128 256 128ZM256 272C220.711 272 192 243.289 192 208S220.711 144 256 144S320 172.711 320 208S291.289 272 256 272Z" })
  }
));
CircleUserThin.displayName = "CircleUserThin";
var CircleUser_default = CircleUserThin;
