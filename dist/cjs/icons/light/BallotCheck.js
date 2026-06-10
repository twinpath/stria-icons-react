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
var BallotCheck_exports = {};
__export(BallotCheck_exports, {
  default: () => BallotCheck_default
});
module.exports = __toCommonJS(BallotCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BallotCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 360C82.746 360 72 370.744 72 384C72 397.254 82.746 408 96 408C109.256 408 120 397.254 120 384C120 370.744 109.256 360 96 360ZM352 368H176C167.156 368 160 375.156 160 384S167.156 400 176 400H352C360.844 400 368 392.844 368 384S360.844 368 352 368ZM101.328 288C105.422 288 109.516 286.438 112.641 283.312L171.312 224.641C177.562 218.391 177.562 208.266 171.312 202.016S154.937 195.766 148.688 202.016L101.328 249.375L83.312 231.359C77.062 225.109 66.937 225.109 60.688 231.359S54.438 247.734 60.688 253.984L90.016 283.312C93.141 286.438 97.234 288 101.328 288ZM96 152C109.256 152 120 141.254 120 128C120 114.744 109.256 104 96 104C82.746 104 72 114.744 72 128C72 141.254 82.746 152 96 152ZM352 240H208C199.156 240 192 247.156 192 256S199.156 272 208 272H352C360.844 272 368 264.844 368 256S360.844 240 352 240ZM384 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H384C419.348 512 448 483.346 448 448V64C448 28.652 419.348 0 384 0ZM416 448C416 465.645 401.645 480 384 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H384C401.645 32 416 46.355 416 64V448ZM352 112H176C167.156 112 160 119.156 160 128S167.156 144 176 144H352C360.844 144 368 136.844 368 128S360.844 112 352 112Z" })
  }
));
BallotCheckLight.displayName = "BallotCheckLight";
var BallotCheck_default = BallotCheckLight;
