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
var DongSign_exports = {};
__export(DongSign_exports, {
  default: () => DongSign_default
});
module.exports = __toCommonJS(DongSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DongSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 400C222.416 400 250.014 388.896 272 371.111V376C272 389.25 282.75 400 296 400S320 389.25 320 376V112H328C341.25 112 352 101.25 352 88S341.25 64 328 64H320V56C320 42.75 309.25 32 296 32S272 42.75 272 56V64H216C202.75 64 192 74.75 192 88S202.75 112 216 112H272V172.889C250.014 155.104 222.416 144 192 144C121.422 144 64 201.406 64 272S121.422 400 192 400ZM192 192C236.109 192 272 227.875 272 272S236.109 352 192 352S112 316.125 112 272S147.891 192 192 192ZM360 432H24C10.75 432 0 442.75 0 456S10.75 480 24 480H360C373.25 480 384 469.25 384 456S373.25 432 360 432Z" })
  }
));
DongSignRegular.displayName = "DongSignRegular";
var DongSign_default = DongSignRegular;
