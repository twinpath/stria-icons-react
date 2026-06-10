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
var MicrochipAi_exports = {};
__export(MicrochipAi_exports, {
  default: () => MicrochipAi_default
});
module.exports = __toCommonJS(MicrochipAi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrochipAiThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.328 180.797C212.797 174.953 203.203 174.953 200.672 180.797L137.672 324.797C135.906 328.844 137.75 333.562 141.797 335.328C145.859 337.109 150.547 335.266 152.328 331.203L164.23 304H251.771L263.672 331.203C264.984 334.203 267.922 336 271 336C272.078 336 273.156 335.781 274.203 335.328C278.25 333.562 280.094 328.844 278.328 324.797L215.328 180.797ZM171.23 288L208 203.953L244.771 288H171.23ZM336 176C331.578 176 328 179.578 328 184V328C328 332.422 331.578 336 336 336S344 332.422 344 328V184C344 179.578 340.422 176 336 176ZM504 264C508.422 264 512 260.422 512 256S508.422 248 504 248H448V168H504C508.422 168 512 164.422 512 160S508.422 152 504 152H448C447.697 152 447.518 152.289 447.225 152.32C443.455 105.531 406.467 68.547 359.68 64.773C359.713 64.484 360 64.305 360 64V8C360 3.578 356.422 0 352 0S344 3.578 344 8V64H264V8C264 3.578 260.422 0 256 0S248 3.578 248 8V64H168V8C168 3.578 164.422 0 160 0S152 3.578 152 8V64C152 64.305 152.287 64.484 152.32 64.773C105.533 68.547 68.545 105.531 64.775 152.32C64.482 152.289 64.303 152 64 152H8C3.578 152 0 155.578 0 160S3.578 168 8 168H64V248H8C3.578 248 0 251.578 0 256S3.578 264 8 264H64V344H8C3.578 344 0 347.578 0 352S3.578 360 8 360H64C64.303 360 64.482 359.711 64.775 359.68C68.545 406.469 105.533 443.453 152.32 447.227C152.287 447.516 152 447.695 152 448V504C152 508.422 155.578 512 160 512S168 508.422 168 504V448H248V504C248 508.422 251.578 512 256 512S264 508.422 264 504V448H344V504C344 508.422 347.578 512 352 512S360 508.422 360 504V448C360 447.695 359.713 447.516 359.68 447.227C406.467 443.453 443.455 406.469 447.225 359.68C447.518 359.711 447.697 360 448 360H504C508.422 360 512 356.422 512 352S508.422 344 504 344H448V264H504ZM432 352C432 396.113 396.113 432 352 432H160C115.889 432 80 396.113 80 352V160C80 115.887 115.889 80 160 80H352C396.113 80 432 115.887 432 160V352Z" })
  }
));
MicrochipAiThin.displayName = "MicrochipAiThin";
var MicrochipAi_default = MicrochipAiThin;
