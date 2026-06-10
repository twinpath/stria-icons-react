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
var TrashCanList_exports = {};
__export(TrashCanList_exports, {
  default: () => TrashCanList_default
});
module.exports = __toCommonJS(TrashCanList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanListSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 464C32 490.5 53.5 512 80 512H336C362.5 512 384 490.5 384 464V128H32V464ZM256 208C256 199.125 263.125 192 272 192S288 199.125 288 208V432C288 440.875 280.875 448 272 448S256 440.875 256 432V208ZM128 208C128 199.125 135.125 192 144 192S160 199.125 160 208V432C160 440.875 152.875 448 144 448S128 440.875 128 432V208ZM400 32H320L308.422 8.844C305.713 3.424 300.172 0 294.111 0H121.889C115.828 0 110.289 3.424 107.578 8.844L96 32H16C7.164 32 0 39.162 0 48V80C0 88.836 7.164 96 16 96H400C408.838 96 416 88.836 416 80V48C416 39.162 408.838 32 400 32ZM512 384H480C462.327 384 448 398.327 448 416V416C448 433.673 462.327 448 480 448H512C529.673 448 544 433.673 544 416V416C544 398.327 529.673 384 512 384ZM608 128H480C462.327 128 448 142.327 448 160V160C448 177.673 462.327 192 480 192H608C625.673 192 640 177.673 640 160V160C640 142.327 625.673 128 608 128ZM576 256H480C462.327 256 448 270.327 448 288V288C448 305.673 462.327 320 480 320H576C593.673 320 608 305.673 608 288V288C608 270.327 593.673 256 576 256Z" })
  }
));
TrashCanListSolid.displayName = "TrashCanListSolid";
var TrashCanList_default = TrashCanListSolid;
