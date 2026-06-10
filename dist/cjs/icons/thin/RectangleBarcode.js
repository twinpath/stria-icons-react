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
var RectangleBarcode_exports = {};
__export(RectangleBarcode_exports, {
  default: () => RectangleBarcode_default
});
module.exports = __toCommonJS(RectangleBarcode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleBarcodeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 128C131.578 128 128 131.578 128 136V376C128 380.422 131.578 384 136 384S144 380.422 144 376V136C144 131.578 140.422 128 136 128ZM88 128C83.578 128 80 131.578 80 136V376C80 380.422 83.578 384 88 384S96 380.422 96 376V136C96 131.578 92.422 128 88 128ZM376 128C371.578 128 368 131.578 368 136V376C368 380.422 371.578 384 376 384S384 380.422 384 376V136C384 131.578 380.422 128 376 128ZM328 128C323.578 128 320 131.578 320 136V376C320 380.422 323.578 384 328 384S336 380.422 336 376V136C336 131.578 332.422 128 328 128ZM184 128C179.578 128 176 131.578 176 136V376C176 380.422 179.578 384 184 384S192 380.422 192 376V136C192 131.578 188.422 128 184 128ZM248 128C243.578 128 240 131.578 240 136V376C240 380.422 243.578 384 248 384S256 380.422 256 376V136C256 131.578 252.422 128 248 128ZM488 128C483.578 128 480 131.578 480 136V376C480 380.422 483.578 384 488 384S496 380.422 496 376V136C496 131.578 492.422 128 488 128ZM432 128C427.578 128 424 131.578 424 136V376C424 380.422 427.578 384 432 384S440 380.422 440 376V136C440 131.578 436.422 128 432 128ZM512 32H64C28.656 32 0 60.654 0 96V416C0 451.346 28.656 480 64 480H512C547.344 480 576 451.346 576 416V96C576 60.654 547.344 32 512 32ZM560 416C560 442.467 538.469 464 512 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H512C538.469 48 560 69.533 560 96V416Z" })
  }
));
RectangleBarcodeThin.displayName = "RectangleBarcodeThin";
var RectangleBarcode_default = RectangleBarcodeThin;
