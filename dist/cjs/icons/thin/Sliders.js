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
var Sliders_exports = {};
__export(Sliders_exports, {
  default: () => Sliders_default
});
module.exports = __toCommonJS(Sliders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SlidersThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.986 160C273.66 160 287.986 145.672 287.986 128V104H504C508.406 104 512 100.422 512 96S508.406 88 504 88H287.986V64C287.986 46.326 273.66 32 255.986 32S223.986 46.326 223.986 64V128C223.986 145.672 238.312 160 255.986 160ZM239.986 64C239.986 55.178 247.164 48 255.986 48S271.986 55.178 271.986 64V128C271.986 136.822 264.809 144 255.986 144S239.986 136.822 239.986 128V64ZM504 408H191.986V384C191.986 366.326 177.66 352 159.986 352S127.986 366.326 127.986 384V448C127.986 465.672 142.313 480 159.986 480S191.986 465.672 191.986 448V424H504C508.406 424 512 420.422 512 416S508.406 408 504 408ZM175.986 448C175.986 456.822 168.809 464 159.986 464S143.986 456.822 143.986 448V384C143.986 375.178 151.164 368 159.986 368S175.986 375.178 175.986 384V448ZM8 104H184C188.406 104 192 100.422 192 96S188.406 88 184 88H8C3.594 88 0 91.578 0 96S3.594 104 8 104ZM504 248H416C415.994 248 415.992 248.006 415.986 248.006V224C415.986 206.326 401.66 192 383.986 192S351.986 206.326 351.986 224V288C351.986 305.672 366.313 320 383.986 320S415.986 305.672 415.986 288V263.994C415.992 263.994 415.994 264 416 264H504C508.406 264 512 260.422 512 256S508.406 248 504 248ZM399.986 288C399.986 296.822 392.809 304 383.986 304S367.986 296.822 367.986 288V224C367.986 215.178 375.164 208 383.986 208S399.986 215.178 399.986 224V288ZM88 408H8C3.594 408 0 411.578 0 416S3.594 424 8 424H88C92.406 424 96 420.422 96 416S92.406 408 88 408ZM8 264H312C316.406 264 320 260.422 320 256S316.406 248 312 248H8C3.594 248 0 251.578 0 256S3.594 264 8 264Z" })
  }
));
SlidersThin.displayName = "SlidersThin";
var Sliders_default = SlidersThin;
