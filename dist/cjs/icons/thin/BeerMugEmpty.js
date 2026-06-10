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
var BeerMugEmpty_exports = {};
__export(BeerMugEmpty_exports, {
  default: () => BeerMugEmpty_default
});
module.exports = __toCommonJS(BeerMugEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BeerMugEmptyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 128C139.578 128 136 131.578 136 136V376C136 380.422 139.578 384 144 384S152 380.422 152 376V136C152 131.578 148.422 128 144 128ZM208 128C203.578 128 200 131.578 200 136V376C200 380.422 203.578 384 208 384S216 380.422 216 376V136C216 131.578 212.422 128 208 128ZM272 128C267.578 128 264 131.578 264 136V376C264 380.422 267.578 384 272 384S280 380.422 280 376V136C280 131.578 276.422 128 272 128ZM440 96H384V64C384 46.326 369.674 32 352 32H64C46.328 32 32 46.326 32 64V416C32 451.346 60.654 480 96 480H320C355.348 480 384 451.346 384 416V372.945L440.203 344.844C464.75 332.562 480 307.891 480 280.453V136C480 113.938 462.062 96 440 96ZM368 416C368 442.467 346.467 464 320 464H96C69.533 464 48 442.467 48 416V64C48 55.178 55.178 48 64 48H352C360.822 48 368 55.178 368 64V416ZM464 280.453C464 301.797 452.141 320.984 433.047 330.531L384 355.055V112H440C453.234 112 464 122.766 464 136V280.453Z" })
  }
));
BeerMugEmptyThin.displayName = "BeerMugEmptyThin";
var BeerMugEmpty_default = BeerMugEmptyThin;
