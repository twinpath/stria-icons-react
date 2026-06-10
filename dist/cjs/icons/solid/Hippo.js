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
var Hippo_exports = {};
__export(Hippo_exports, {
  default: () => Hippo_default
});
module.exports = __toCommonJS(Hippo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HippoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M584.249 96.356C555.369 94.655 529.531 113.407 504.5 122.875C490 88.25 455.875 64 416 64C404.75 64 394 66.25 384 69.875V56C384 42.75 373.25 32 360 32H344C330.75 32 320 42.75 320 56V105C286 79.625 241.25 64 192 64C86 64 0 135.625 0 224V456C0 469.255 10.745 480 24 480H72C85.255 480 96 469.255 96 456V393.25C128.375 407.625 166.75 416 208 416S287.625 407.625 320 393.25V456C320 469.255 330.745 480 344 480H392C405.255 480 416 469.255 416 456V288H544V320C544 328.837 551.163 336 560 336H592C600.837 336 608 328.837 608 320V288C625.625 288 640 273.625 640 256L640 159.934C640 127.755 616.372 98.249 584.249 96.356ZM448 176C439.125 176 432 168.875 432 160S439.125 144 448 144S464 151.125 464 160S456.875 176 448 176Z" })
  }
));
HippoSolid.displayName = "HippoSolid";
var Hippo_default = HippoSolid;
