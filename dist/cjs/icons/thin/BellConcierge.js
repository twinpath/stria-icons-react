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
var BellConcierge_exports = {};
__export(BellConcierge_exports, {
  default: () => BellConcierge_default
});
module.exports = __toCommonJS(BellConcierge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellConciergeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 432H8C3.578 432 0 435.578 0 440S3.578 448 8 448H504C508.422 448 512 444.422 512 440S508.422 432 504 432ZM32 392C36.422 392 40 388.422 40 384C40 264.891 136.891 168 256 168S472 264.891 472 384C472 388.422 475.578 392 480 392S488 388.422 488 384C488 258.779 388.201 156.67 264 152.404V80H312C316.422 80 320 76.422 320 72S316.422 64 312 64H200C195.578 64 192 67.578 192 72S195.578 80 200 80H248V152.404C123.799 156.67 24 258.779 24 384C24 388.422 27.578 392 32 392Z" })
  }
));
BellConciergeThin.displayName = "BellConciergeThin";
var BellConcierge_default = BellConciergeThin;
