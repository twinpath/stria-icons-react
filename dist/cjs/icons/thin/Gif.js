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
var Gif_exports = {};
__export(Gif_exports, {
  default: () => Gif_default
});
module.exports = __toCommonJS(Gif_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GifThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM560 416C560 442.467 538.467 464 512 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H512C538.467 48 560 69.533 560 96V416ZM480 168H376C371.578 168 368 171.578 368 176V336C368 340.422 371.578 344 376 344S384 340.422 384 336V272H464C468.422 272 472 268.422 472 264S468.422 256 464 256H384V184H480C484.422 184 488 180.422 488 176S484.422 168 480 168ZM296 168C291.578 168 288 171.578 288 176V336C288 340.422 291.578 344 296 344S304 340.422 304 336V176C304 171.578 300.422 168 296 168ZM232 248H160C155.578 248 152 251.578 152 256S155.578 264 160 264H224V309.125C210.688 321.156 191.828 328 171.719 328C150.406 328 130.5 320.312 117.094 306.906C103.484 293.312 96 275.234 96 256S103.484 218.688 117.094 205.094C130.693 191.486 149.029 184.678 167.367 184.68C185.693 184.682 204.021 191.482 217.609 205.094C219.172 206.656 221.219 207.438 223.266 207.438S227.359 206.656 228.922 205.094C232.047 201.969 232.047 196.906 228.922 193.781C212.312 177.156 190.438 168 167.359 168C144.266 168 122.391 177.156 105.781 193.781C89.156 210.391 80 232.5 80 256S89.156 301.609 105.781 318.219C122.156 334.609 146.188 344 171.719 344S221.281 334.609 237.656 318.219C239.156 316.719 240 314.688 240 312.562V256C240 251.578 236.422 248 232 248Z" })
  }
));
GifThin.displayName = "GifThin";
var Gif_default = GifThin;
