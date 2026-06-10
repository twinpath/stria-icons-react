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
var AddressCard_exports = {};
__export(AddressCard_exports, {
  default: () => AddressCard_default
});
module.exports = __toCommonJS(AddressCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AddressCardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 312H360C355.578 312 352 315.578 352 320S355.578 328 360 328H504C508.422 328 512 324.422 512 320S508.422 312 504 312ZM176 256C211.348 256 240 227.346 240 192S211.348 128 176 128C140.656 128 112 156.654 112 192S140.656 256 176 256ZM176 144C202.469 144 224 165.533 224 192S202.469 240 176 240S128 218.467 128 192S149.531 144 176 144ZM512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.654 547.346 32 512 32ZM560 416C560 442.51 538.51 464 512 464H64C37.49 464 16 442.51 16 416V96C16 69.49 37.49 48 64 48H512C538.51 48 560 69.49 560 96V416ZM504 248H360C355.578 248 352 251.578 352 256S355.578 264 360 264H504C508.422 264 512 260.422 512 256S508.422 248 504 248ZM504 184H360C355.578 184 352 187.578 352 192S355.578 200 360 200H504C508.422 200 512 196.422 512 192S508.422 184 504 184ZM208 288H144C99.891 288 64 323.891 64 368V376C64 380.422 67.578 384 72 384S80 380.422 80 376V368C80 332.703 108.703 304 144 304H208C243.297 304 272 332.703 272 368V376C272 380.422 275.578 384 280 384S288 380.422 288 376V368C288 323.891 252.109 288 208 288Z" })
  }
));
AddressCardThin.displayName = "AddressCardThin";
var AddressCard_default = AddressCardThin;
