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
const CircleBookOpenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.449 16 256S123.451 496 256 496S496 388.551 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.867 64 256S150.131 64 256 64S448 150.133 448 256S361.869 448 256 448ZM136.752 172.805C131.379 175 128 180.094 128 185.547V341.859C128 346.906 133.643 350.406 138.562 348.266C189.08 326.289 228.188 345.039 240 352V168.953C230.098 164.891 215.014 160.336 195.896 160.016C178.324 159.688 157.977 164.125 136.752 172.805ZM375.242 172.805C354.012 164.156 333.607 159.863 316.104 160.016C296.986 160.336 281.902 164.891 272 168.953V351.996C283.809 345.035 322.902 326.281 373.438 348.266C378.357 350.406 384 346.906 384 341.859V185.555C384 180.094 380.621 175 375.242 172.805Z" })
  }
));
CircleBookOpenRegular.displayName = "CircleBookOpenRegular";
var CircleBookOpen_default = CircleBookOpenRegular;
