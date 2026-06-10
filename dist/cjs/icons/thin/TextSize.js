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
var TextSize_exports = {};
__export(TextSize_exports, {
  default: () => TextSize_default
});
module.exports = __toCommonJS(TextSize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextSizeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 40L0 120C0 124.422 3.578 128 8 128S16 124.422 16 120V48H184V464H104C99.578 464 96 467.578 96 472S99.578 480 104 480H280C284.422 480 288 476.422 288 472S284.422 464 280 464H200V48H368V120C368 124.422 371.578 128 376 128S384 124.422 384 120V40C384 35.578 380.422 32 376 32H8C3.578 32 0 35.578 0 40ZM320 232V312C320 316.422 323.578 320 328 320S336 316.422 336 312V240H472V464H408C403.578 464 400 467.578 400 472S403.578 480 408 480H552C556.422 480 560 476.422 560 472S556.422 464 552 464H488V240H624V312C624 316.422 627.578 320 632 320S640 316.422 640 312V232C640 227.578 636.422 224 632 224H328C323.578 224 320 227.578 320 232Z" })
  }
));
TextSizeThin.displayName = "TextSizeThin";
var TextSize_default = TextSizeThin;
