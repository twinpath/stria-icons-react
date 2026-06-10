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
var BoothCurtain_exports = {};
__export(BoothCurtain_exports, {
  default: () => BoothCurtain_default
});
module.exports = __toCommonJS(BoothCurtain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoothCurtainThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 0H40C17.938 0 0 17.938 0 40V504C0 508.422 3.594 512 8 512S16 508.422 16 504V40C16 26.766 26.781 16 40 16H96V400C96 426.51 117.49 448 144 448C160.717 448 175.406 439.436 184 426.475C192.594 439.436 207.283 448 224 448S255.406 439.436 264 426.475C272.594 439.436 287.283 448 304 448S335.406 439.436 344 426.475C352.594 439.436 367.283 448 384 448S415.406 439.436 424 426.475C432.594 439.436 447.283 448 464 448C476.35 448 487.494 443.205 496 435.543V504C496 508.422 499.594 512 504 512S512 508.422 512 504V40C512 17.938 494.062 0 472 0ZM176 400C176 417.645 161.645 432 144 432S112 417.645 112 400V16H176V400ZM256 400C256 417.645 241.645 432 224 432S192 417.645 192 400V16H256V400ZM336 400C336 417.645 321.645 432 304 432S272 417.645 272 400V16H336V400ZM416 400C416 417.645 401.645 432 384 432S352 417.645 352 400V16H416V400ZM496 400C496 417.645 481.645 432 464 432S432 417.645 432 400V16H472C485.219 16 496 26.766 496 40V400Z" })
  }
));
BoothCurtainThin.displayName = "BoothCurtainThin";
var BoothCurtain_default = BoothCurtainThin;
