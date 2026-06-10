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
var Projector_exports = {};
__export(Projector_exports, {
  default: () => Projector_default
});
module.exports = __toCommonJS(Projector_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ProjectorThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 128C420.422 128 424 124.422 424 120V8C424 3.578 420.422 0 416 0S408 3.578 408 8V120C408 124.422 411.578 128 416 128ZM496.797 136C498.844 136 500.891 135.219 502.453 133.656L581.656 54.453C584.781 51.328 584.781 46.266 581.656 43.141S573.469 40.016 570.344 43.141L491.141 122.344C488.016 125.469 488.016 130.531 491.141 133.656C492.703 135.219 494.75 136 496.797 136ZM329.547 133.656C331.109 135.219 333.156 136 335.203 136S339.297 135.219 340.859 133.656C343.984 130.531 343.984 125.469 340.859 122.344L261.656 43.141C258.531 40.016 253.469 40.016 250.344 43.141S247.219 51.328 250.344 54.453L329.547 133.656ZM96 304C87.164 304 80 311.164 80 320S87.164 336 96 336C104.838 336 112 328.836 112 320S104.838 304 96 304ZM192 304C183.164 304 176 311.164 176 320S183.164 336 192 336C200.838 336 208 328.836 208 320S200.838 304 192 304ZM568 192H512C511.771 192 511.641 192.223 511.416 192.242C484.715 172.26 451.916 160 416 160S347.285 172.26 320.584 192.242C320.359 192.223 320.229 192 320 192H72C32.297 192 0 224.297 0 264V376C0 413.074 28.264 443.332 64.32 447.225C64.287 447.52 64 447.697 64 448V504C64 508.422 67.578 512 72 512S80 508.422 80 504V448H320C320.229 448 320.359 447.777 320.584 447.758C347.285 467.74 380.084 480 416 480S484.715 467.74 511.416 447.758C511.641 447.777 511.771 448 512 448H560V504C560 508.422 563.578 512 568 512S576 508.422 576 504V447.191C611.9 443.152 640 412.963 640 376V264C640 224.297 607.703 192 568 192ZM72 432C41.125 432 16 406.875 16 376V264C16 233.125 41.125 208 72 208H301.926C273.582 236.867 256 276.348 256 320S273.582 403.133 301.926 432H72ZM416 464C336.598 464 272 399.402 272 320S336.598 176 416 176S560 240.598 560 320S495.402 464 416 464ZM624 376C624 406.875 598.875 432 568 432H530.074C558.418 403.133 576 363.652 576 320S558.418 236.867 530.074 208H568C598.875 208 624 233.125 624 264V376Z" })
  }
));
ProjectorThin.displayName = "ProjectorThin";
var Projector_default = ProjectorThin;
