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
var CircleBookOpen_exports = {};
__export(CircleBookOpen_exports, {
  default: () => CircleBookOpen_default
});
module.exports = __toCommonJS(CircleBookOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleBookOpenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM240 352C228.188 345.041 189.08 326.289 138.562 348.266C133.643 350.406 128 346.908 128 341.861V185.547C128 180.092 131.379 175.002 136.752 172.803C157.977 164.127 178.324 159.689 195.896 160.018C215.014 160.338 230.098 164.891 240 168.951V352ZM384 341.861C384 346.908 378.357 350.406 373.438 348.266C322.902 326.283 283.809 345.035 272 351.996V168.951C281.902 164.891 296.986 160.338 316.104 160.018C333.607 159.863 354.012 164.154 375.242 172.805C380.621 174.998 384 180.096 384 185.553V341.861Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M375.242 172.805C354.012 164.154 333.607 159.863 316.104 160.018C296.986 160.338 281.902 164.891 272 168.951V351.996C283.809 345.035 322.902 326.283 373.438 348.266C378.357 350.406 384 346.908 384 341.861V185.553C384 180.096 380.621 174.998 375.242 172.805ZM136.752 172.803C131.379 175.002 128 180.092 128 185.547V341.861C128 346.908 133.643 350.406 138.562 348.266C189.08 326.289 228.188 345.041 240 352V168.951C230.098 164.891 215.014 160.338 195.896 160.018C178.324 159.689 157.977 164.127 136.752 172.803Z" })
    ]
  }
));
CircleBookOpenDuotone.displayName = "CircleBookOpenDuotone";
var CircleBookOpen_default = CircleBookOpenDuotone;
